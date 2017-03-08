package io.smsc.repository.admin;


import com.google.common.testing.EqualsTester;
import io.smsc.AbstractTest;
import io.smsc.model.admin.User;
import io.smsc.model.customer.Customer;
import io.smsc.model.customer.Salutation;
import junit.framework.AssertionFailedError;
import org.junit.Before;
import org.junit.Test;

import java.util.Collections;

public class UserUnitTest extends AbstractTest {

    private User user1;
    private User user2;

    @Before
    public void initGroups() throws Exception {
        this.user1 = new User();
        this.user2 = new User();
        user1.setId(1L);
        user1.setUsername("Old Johnny");
        user1.setFirstname("John");
        user1.setSurname("Forrester");
        user1.setEmail("john@gmail.com");
        user1.setActive(true);
        user1.setBlocked(false);
        user1.setSalutation(Salutation.MR);
        user1.setAuthorities(Collections.emptySet());
        user1.setGroups(Collections.emptySet());
        user1.setRoles(Collections.emptySet());
        user1.setDashboards(Collections.emptySet());
        user2.setId(1L);
        user2.setUsername("Old Johnny");
        user2.setFirstname("John");
        user2.setSurname("Forrester");
        user2.setEmail("john@gmail.com");
        user2.setActive(true);
        user2.setBlocked(false);
        user2.setSalutation(Salutation.MR);
        user2.setAuthorities(Collections.emptySet());
        user2.setGroups(Collections.emptySet());
        user2.setRoles(Collections.emptySet());
        user2.setDashboards(Collections.emptySet());
    }

    @Test
    public void testEqualsAndHashcodeSameUsers() throws Exception {
        new EqualsTester().addEqualityGroup(user1, user1)
                .addEqualityGroup(user1.hashCode(), user1.hashCode()).testEquals();
    }

    @Test
    public void testEqualsAndHashcodePairOfEqualUsers() throws Exception {
        new EqualsTester().addEqualityGroup(user1, user2)
                .addEqualityGroup(user1.hashCode(), user2.hashCode()).testEquals();
    }

    @Test(expected = NullPointerException.class)
    public void testEqualsAndHashcodeUserAndNull() throws Exception {
        new EqualsTester().addEqualityGroup(null, user1).testEquals();
    }

    @Test(expected = AssertionFailedError.class)
    public void testEqualsAndHashcodeUserAndOtherObject() throws Exception {
        new EqualsTester().addEqualityGroup(user1, new Customer()).testEquals();
    }

    @Test(expected = AssertionFailedError.class)
    public void testEqualsAndHashcodePairOfNonEqualUsers() throws Exception {
        user2.setId(2L);
        new EqualsTester().addEqualityGroup(user1, user2).testEquals();
    }
}
