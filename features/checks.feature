Feature: Various Checks

    Scenario: Good UMRs
        Given a UMR of "<umr>"
        When I run the umr check
        Then I get a check result of true
        Examples:
        | umr | 
        | B0999JC2110200826 |
        | B0999J |

    Scenario: Bad UMRs
        Given a UMR of "<umr>"
        When I run the umr check
        Then I get a check result of false
        Examples:
        | umr |
        | X | 
        | B |
#        | B0999 |
#        | B0999JC2110200826X | 
#        | B0999JC2110 00826 |
#        | B0999JC2110-00826 |
#        | B0999JC2110a00826 |