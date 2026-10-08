package com.premium.template.adminandroid.feature.modules
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
@Composable fun VaultScreen(onCreate:()->Unit){Card{Column{Text("Vault");Text("Domain-specific vault workflow");Button(onClick=onCreate){Text("Create")}}}}
